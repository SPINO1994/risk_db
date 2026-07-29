package az.risk.registry.controller;

import az.risk.registry.exception.ResourceNotFoundException;
import az.risk.registry.service.CrudService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractCrudController<T, ID> {

    protected abstract CrudService<T, ID> getService();

    @GetMapping
    public List<T> findAll(@RequestParam(value = "search", required = false) String search) {
        if (search != null && !search.trim().isEmpty()) {
            return getService().search(search.trim());
        }
        return getService().findAll();
    }

    @GetMapping("/{id}")
    public T findById(@PathVariable ID id) {
        return getService().findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Record not found with id: " + id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public T create(@RequestBody T entity) {
        return getService().create(entity);
    }

    @PutMapping("/{id}")
    public T update(@PathVariable ID id, @RequestBody T entity) {
        return getService().update(id, entity);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable ID id) {
        getService().delete(id);
    }
}
