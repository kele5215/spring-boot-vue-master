package com.ggdl.demoproject.controller;

import com.ggdl.demoproject.domain.User;
import com.ggdl.demoproject.service.UserService;
import com.ggdl.demoproject.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vi/pub/user")
public class UserController {

//    private final UserService userService;
//
//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }


//    public JsonData login(String userName, String pwd) {
//
//        System.out.println("userName =" + userName + " pwd =" + pwd);
//
//        return JsonData.buildSuccess("");
//    }

    @PostMapping("login")
    // @RequestBody 可以接受前端Json方式的数据 建议开发是使用这种方式
    public JsonData login(@RequestBody User user) {

        System.out.println("userName =" + user.toString());

        return JsonData.buildSuccess("");
    }


}
