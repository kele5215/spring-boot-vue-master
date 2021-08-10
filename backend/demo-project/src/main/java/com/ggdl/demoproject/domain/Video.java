package com.ggdl.demoproject.domain;

import java.util.Date;

public class Video {

    private Integer id;
    private String title;
    private String summary;
    private int price;
    private String convertImg;
    private Date createTime;

    public Video(Integer id, String title, String summary, int price) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.price = price;
        this.createTime = new Date();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setConvertImg(String convertImg) {
        this.convertImg = convertImg;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }


    @Override
    public String toString() {
        return "Video{" +
                "id='" + id + '\'' +
                ", summary='" + summary + '\'' +
                ", price=" + price +
                ", convertImg='" + convertImg + '\'' +
                ", createTime=" + createTime +
                '}';
    }
}
