package com.easygame.easygame.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistrationDto {
    private String name;
    private String surname;
    private String login;
    private String password;
    private String email;
    private String phoneNumber;
    private int age;
}
