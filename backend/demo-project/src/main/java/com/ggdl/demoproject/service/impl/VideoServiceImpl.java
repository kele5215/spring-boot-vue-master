package com.ggdl.demoproject.service.impl;

import com.ggdl.demoproject.domain.Video;
import com.ggdl.demoproject.mapper.VideoMapper;
import com.ggdl.demoproject.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

    //private VideoMapper videoMapper = new VideoMapper();
    private final VideoMapper videoMapper;

    @Autowired
    public VideoServiceImpl(VideoMapper videoMapper) {
        this.videoMapper = videoMapper;
    }

    @Override
    public List<Video> listVideo() {
        return videoMapper.listVideo();
    }
}
