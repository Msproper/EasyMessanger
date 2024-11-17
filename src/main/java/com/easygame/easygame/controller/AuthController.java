package com.easygame.easygame.controller;

import com.easygame.easygame.DTO.auth.JwtAuthenticationResponse;
import com.easygame.easygame.DTO.auth.SignInRequest;
import com.easygame.easygame.DTO.auth.UpdateResponse;
import com.easygame.easygame.DTO.exception.ValidationRuntimeException;
import com.easygame.easygame.security.AuthenticationService;
import com.easygame.easygame.DTO.auth.SignUpRequest;
import com.easygame.easygame.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import java.util.List;




@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Аутентификация")
public class AuthController {
    private final AuthenticationService authenticationService;
    private final UserService userService;


    @Operation(summary = "Регистрация пользователя")
    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody @Valid SignUpRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) throw new ValidationRuntimeException(bindingResult);
        JwtAuthenticationResponse jwtAuthenticationResponse = authenticationService.signUp(request);
        return new ResponseEntity<>(jwtAuthenticationResponse, HttpStatus.OK);
    }

    @Operation(summary = "Авторизация пользователя")
    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn(@RequestBody @Valid SignInRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) throw new ValidationRuntimeException(bindingResult);
        JwtAuthenticationResponse jwtAuthenticationResponse = authenticationService.signIn(request);
        return new ResponseEntity<>(jwtAuthenticationResponse, HttpStatus.OK);
    }



    @Operation(summary = "Обновление пользователя")
    @PostMapping("/update")
    public ResponseEntity<?> update(){
        UpdateResponse updateResponse = userService.update();
        return new ResponseEntity<>(updateResponse, HttpStatus.OK);
    }
}

