package com.mypet.back_end.controllers;

import com.mypet.back_end.dto.PersonDto;
import com.mypet.back_end.requests.PersonRequest;
import com.mypet.back_end.responses.PersonResponse;
import com.mypet.back_end.services.PersonService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/person")
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/all")
    public ResponseEntity<List<PersonResponse>> getAllPersons() {
        List<PersonDto> personDtos = personService.getAllPersons();
        List<PersonResponse> personResponses = new ArrayList<PersonResponse>();
        for (PersonDto personDto : personDtos) {
            PersonResponse personResponse = new PersonResponse();
            BeanUtils.copyProperties(personDto, personResponse);
            personResponses.add(personResponse);
        }
        return ResponseEntity.ok(personResponses);
    }

    @PostMapping("/update")
    public ResponseEntity<PersonResponse> updatePerson(@RequestBody PersonRequest personRequest) {
        PersonDto personDto = new PersonDto();
        PersonDto targetPerson = personService.findPersonByReferencePerson(personRequest.getReferencePerson());
        BeanUtils.copyProperties(personRequest, personDto);
        personDto.setId(targetPerson.getId());
        PersonDto updatedPerson = personService.updatePerson(personDto);
        PersonResponse personResponse = new PersonResponse();
        BeanUtils.copyProperties(updatedPerson, personResponse);
        return ResponseEntity.ok(personResponse);
    }
}
