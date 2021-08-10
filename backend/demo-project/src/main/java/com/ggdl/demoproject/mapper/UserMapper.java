package com.ggdl.demoproject.mapper;

import com.ggdl.demoproject.domain.User;

import java.util.HashMap;
import java.util.Map;

public class UserMapper {

    private static final Map<Integer, User> userMap;

    static {
        userMap = new HashMap<>();
        userMap.put(1, new User(1, "user1", "123"));
        userMap.put(2, new User(1, "user2", "123"));
        userMap.put(3, new User(1, "user3", "123"));
    }
}
