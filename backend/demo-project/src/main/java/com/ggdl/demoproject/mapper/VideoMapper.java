package com.ggdl.demoproject.mapper;

import com.ggdl.demoproject.domain.Video;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class VideoMapper {

    private static Map<Integer, Video> videoMap = new HashMap();

    static {
        videoMap.put(1, new Video(1, "test1", "summary1", 100));
        videoMap.put(2, new Video(2, "test2", "summary2", 200));
        videoMap.put(3, new Video(3, "test3", "summary3", 300));
        videoMap.put(4, new Video(4, "test4", "summary4", 400));
        videoMap.put(5, new Video(5, "test5", "summary5", 500));
    }

    public List<Video> listVideo() {

        List<Video> list = new ArrayList<>();
        list.addAll(videoMap.values());
        return list;
    }
}
