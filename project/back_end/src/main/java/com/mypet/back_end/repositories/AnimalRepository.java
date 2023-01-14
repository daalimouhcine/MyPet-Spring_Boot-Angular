package com.mypet.back_end.repositories;

import com.mypet.back_end.entities.AnimalEntity;
import com.mypet.back_end.entities.PersonEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends CrudRepository<AnimalEntity, Long> {
    @Query("SELECT a FROM AnimalEntity a")
    List<AnimalEntity> getAllAnimals();

    @Query("SELECT a FROM AnimalEntity a where a.person.referencePerson = :referencePerson")
    List<AnimalEntity> findByPersonReference(String referencePerson);

    AnimalEntity findByReferenceAnimal(String referenceAnimal);


}
