 import {serializable,identifier,deserialize } from 'serializr';
 import React from 'react';
 import {Col,Card } from 'antd';
import { observable, computed } from 'mobx';
class Post{
    @serializable(identifier()) id=Math.random();
    @serializable @observable userId=Math.random();
    @serializable @observable title='title'
    @serializable @observable body='body';  

    @computed get getPost(){
        return (
                <Col span={8}>
                    <Card style={{margin:'0.5em'}} title={this.title} bordered={true}>{this.body}</Card>
                </Col>
        )
    }
 }
class PostStore{
     @observable posts =[];

    getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json()).then(data=>{
            this.posts=deserialize(Post,data);
        });
    }
}
const postStore = new PostStore();
export default postStore;
