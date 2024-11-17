package com.easygame.easygame.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Getter
@Setter
@Table(name = "Chats")
public class ChatModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chat_id_seq")
    @SequenceGenerator(name = "chat_id_seq", sequenceName = "chat_id_seq", allocationSize = 1)
    private String id;

    @Column(name = "usersInChat")
    @ManyToMany(mappedBy = "chatRooms")
    private List<UserModel> users;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "chat")
    @Column(name = "messages")
    private List<MessageModel> messages;


}