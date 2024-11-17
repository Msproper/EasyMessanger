package com.easygame.easygame.controller;

import com.easygame.easygame.DTO.ChatDto;
import com.easygame.easygame.DTO.auth.JwtAuthenticationResponse;
import com.easygame.easygame.DTO.auth.SignUpRequest;
import com.easygame.easygame.DTO.exception.ValidationRuntimeException;
import com.easygame.easygame.model.ChatModel;
import com.easygame.easygame.service.ChatService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @Operation(summary = "Создание чата")
    @PostMapping("/create-chat")
    public ResponseEntity<?> createChat(@RequestBody @Valid ChatDto chatDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) throw new ValidationRuntimeException(bindingResult);
        ChatModel chatModel = chatService.createChat(chatDto);
        return new ResponseEntity<>(chatModel, HttpStatus.OK);
    }

    @Operation(summary = "Получение чатов")
    @GetMapping("/getChat")
    public ResponseEntity<?> getChats(){
        List<ChatModel> chats = chatService.getChats();
        return new ResponseEntity<>(chats, HttpStatus.OK);
    }


}