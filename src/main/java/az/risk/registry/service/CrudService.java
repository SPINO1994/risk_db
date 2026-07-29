package az.risk.registry.service;

import java.util.List;
import java.util.Optional;

public interface CrudService<T, ID> {

    List<T> findAll();

    List<T> search(String query);

    Optional<T> findById(ID id);

    T create(T entity);

    T update(ID id, T entity);

    void delete(ID id);
}
