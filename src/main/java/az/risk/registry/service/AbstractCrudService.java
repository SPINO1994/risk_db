package az.risk.registry.service;

import az.risk.registry.exception.ResourceNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class AbstractCrudService<T, ID> implements CrudService<T, ID> {

    protected abstract JpaRepository<T, ID> getRepository();

    protected abstract String getResourceName();

    @Override
    public List<T> findAll() {
        List<T> items = getRepository().findAll();
        items.forEach(this::enrichDisplayNames);
        return items;
    }

    @Override
    public List<T> search(String query) {
        // Default implementation returns all; subclasses override for specific search
        return findAll();
    }

    @Override
    public Optional<T> findById(ID id) {
        Optional<T> item = getRepository().findById(id);
        item.ifPresent(this::enrichDisplayNames);
        return item;
    }

    @Override
    public T create(T entity) {
        return getRepository().save(entity);
    }

    @Override
    public T update(ID id, T entity) {
        if (!getRepository().existsById(id)) {
            throw new ResourceNotFoundException(getResourceName() + " not found with id: " + id);
        }
        setIdOnEntity(entity, id);
        return getRepository().save(entity);
    }

    @SuppressWarnings("unchecked")
    private void setIdOnEntity(T entity, ID id) {
        try {
            var method = entity.getClass().getMethod("setId", Long.class);
            method.invoke(entity, id);
        } catch (ReflectiveOperationException ignored) {
            // Entity without Long id setter — rely on payload id from client
        }
    }

    @Override
    public void delete(ID id) {
        if (!getRepository().existsById(id)) {
            throw new ResourceNotFoundException(getResourceName() + " not found with id: " + id);
        }
        getRepository().deleteById(id);
    }

    /**
     * Override in subclasses to populate @Transient display name fields.
     */
    protected void enrichDisplayNames(T entity) {
        // No-op by default — subclasses override for entities with FK references
    }
}
