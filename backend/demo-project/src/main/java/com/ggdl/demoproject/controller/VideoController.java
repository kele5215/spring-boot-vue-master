package com.ggdl.demoproject.controller;

/*
 * 视频控制器
 */

import com.ggdl.demoproject.domain.Video;
import com.ggdl.demoproject.service.VideoService;
import com.ggdl.demoproject.utils.JsonData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@Controller
@RestController
@RequestMapping("/api/vi/pub/video")
public class VideoController {

//    private final VideoService videoService;
//
//    @Autowired
//    public VideoController(VideoService videoService) {
//        this.videoService = videoService;
//    }

    @Autowired
    private VideoService videoService;

    //@RequestMapping(value = "list",method = RequestMethod.GET)
    @GetMapping("list")
    //@ResponseBody
    public Object list() {

//        Map<String, String> map = new HashMap<>();
//        map.put("1", "test1");
//        map.put("2", "test2");
//        map.put("3", "test3");
//
//        return map;
        //return  "test";

        List<Video> list = videoService.listVideo();
        return JsonData.buildSuccess(list);
    }

}
