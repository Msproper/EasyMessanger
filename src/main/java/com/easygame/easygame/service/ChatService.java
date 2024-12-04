package com.easygame.easygame.service;


import com.easygame.easygame.DTO.ChatDto;
import com.easygame.easygame.model.ChatModel;
import com.easygame.easygame.model.UserModel;
import com.easygame.easygame.repository.ChatRepository;
import com.easygame.easygame.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;
    private final UserService userService;

    public ChatModel save(ChatModel chatModel){
        return chatRepository.save(chatModel);
    }

    public ChatModel createChat(ChatDto chatDto){
        List<UserModel> users = new ArrayList<>();
        for (String name: chatDto.getUsers()){
            users.add(userService.getByUsername(name));
        }
        users.add(userService.getCurrentUser());
        ChatModel chatModel = ChatModel.builder()
                .name(chatDto.getName())
                .users(users)
                .build();

        return save(chatModel);
    }

    public List<ChatModel> getChats(){
        return userService.getCurrentUser().getChats();
    }
}
