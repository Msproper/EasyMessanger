package com.easygame.easygame.repository;


import com.easygame.easygame.model.ChatModel;
import com.easygame.easygame.model.MessageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatRepository extends JpaRepository<ChatModel, Long> {


}
