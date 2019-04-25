import React, { Component } from 'react';
import {Row,Layout} from 'antd';
import postStore from './store/PostStore';
const {Content} = Layout;

export default class PostApp extends Component{
    constructor(props){
        super(props);
        postStore.getPosts()
    }
    render(){
        return (
            <Content>
            <Row>
                <Row gutter={16}>
                {
                    postStore.posts.map((post,idx)=>(
                        <div key={idx}>{post.getPost}</div>
                    ))
                }
                </Row>
            </Row>
        </Content>
        )
    }
}