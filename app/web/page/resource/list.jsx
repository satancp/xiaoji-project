import React, { Component } from 'react';
import HomeLayout from 'component/homelayout/homelayout.jsx';
import './list.css';
import EditPage from './edit.jsx';
import axios from 'axios';
import config from '../../config/config';
import { Table, Icon, Switch, Radio, Form, Divider, Tag, Tooltip, Button, Modal } from 'antd';
import HtmlToReact from 'html-to-react';
const HtmlToReactParser = HtmlToReact.Parser;
const FormItem = Form.Item;

export default class ResourceList extends Component {
    constructor() {
        super();
        this.columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                width: 80,
                sorter: (a, b) => a.id - b.id,
                render: text => <a href="#">{text}</a>
            },
            {
                title: 'Preview Image',
                dataIndex: 'preview_image',
                key: 'preview_image',
                width: 50,
                render: text => <img src={text} style={{ width: 100, height: 100 }} />
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: 120
            },
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
                width: 170
            },
            {
                title: 'Description',
                dataIndex: 'desc',
                key: 'desc',
                width: 170
            },
            {
                title: 'Tags',
                dataIndex: 'adjustedTags',
                key: 'adjustedTags'
            },
            {
                title: 'Action',
                key: 'action',
                width: 180,
                render: (text, record) => (
                    <span>
                        <Tooltip title="Edit">
                            <Button
                                type="primary"
                                shape="circle"
                                icon="edit"
                                onClick={() => this.showEditModal(record)}
                            />
                        </Tooltip>
                        <Divider type="vertical" />
                        <Tooltip title="Delete">
                            <Button
                                type="danger"
                                shape="circle"
                                icon="delete"
                                onClick={() => this.showDeleteModal(record)}
                            />
                        </Tooltip>
                    </span>
                )
            }
        ];
        const htmlToReactParser = new HtmlToReactParser();

        const expandedRowRender = record => {
            console.log(record.content);
            const reactElement = htmlToReactParser.parse(record.content);
            console.log(reactElement);
            return reactElement;
        };

        this.state = {
            bordered: true,
            loading: true,
            pagination: { position: 'bottom' },
            size: 'default',
            expandedRowRender,
            title: undefined,
            showHeader: undefined,
            footer: undefined,
            scroll: undefined,
            visibleDeleteModal: false,
            deleteLoading: false,
            currentId: undefined,
            editLoading: false,
            visibleEditModal: false,
            currentData: undefined,
            data: []
        };
        this.handleOkDeleteModal = () => {
            this.setState({
                deleteLoading: true
            });
            this.deleteData(this.state.currentId);
        };
        this.handleCancelDeleteModal = () => {
            this.setState({
                visibleDeleteModal: false
            });
        };
        this.showDeleteModal = r => {
            this.setState({
                visibleDeleteModal: true,
                currentId: r.id
            });
        };
        this.handleOkEditModal = e => {
            this.setState({
                editLoading: true
            });
            this.editpage
                .handleSubmit(e)
                .then(() => {
                    this.setState({
                        editLoading: false,
                        visibleEditModal: false
                    });
                    axios.get(`${config.server_url}resource/list`).then(response => {
                        for (let x = 0; x < response.data.length; x++) {
                            let temp = [];
                            for (let i = 0; i < response.data[x].tags.length; i++) {
                                temp.push(
                                    <Tag color={response.data[x].tags[i].color} key={response.data[x].tags[i].tag_id}>
                                        {response.data[x].tags[i].tag}
                                    </Tag>
                                );
                            }
                            response.data[x].adjustedTags = temp;
                        }
                        this.setState({ data: response.data, loading: false });
                    });
                })
                .catch(err => {
                    this.setState({
                        editLoading: false
                    });
                });
        };
        this.handleCancelEditModal = () => {
            this.setState({
                visibleEditModal: false
            });
        };
        this.showEditModal = r => {
            this.setState({
                visibleEditModal: true,
                currentData: r
            });
        };
        this.deleteData = id => {
            axios
                .post(`${config.server_url}resource/delete`, {
                    id: id
                })
                .then(response => {
                    this.setState({
                        visibleDeleteModal: false,
                        deleteLoading: false
                    });
                    axios.get(`${config.server_url}resource/list`).then(response => {
                        for (let x = 0; x < response.data.length; x++) {
                            let temp = [];
                            for (let i = 0; i < response.data[x].tags.length; i++) {
                                temp.push(
                                    <Tag color={response.data[x].tags[i].color} key={response.data[x].tags[i].tag_id}>
                                        {response.data[x].tags[i].tag}
                                    </Tag>
                                );
                            }
                            response.data[x].adjustedTags = temp;
                        }
                        this.setState({ data: response.data, loading: false });
                    });
                });
        };
    }

    componentWillMount() {
        axios.get(`${config.server_url}resource/list`).then(response => {
            for (let x = 0; x < response.data.length; x++) {
                let temp = [];
                for (let i = 0; i < response.data[x].tags.length; i++) {
                    temp.push(
                        <Tag color={response.data[x].tags[i].color} key={response.data[x].tags[i].tag_id}>
                            {response.data[x].tags[i].tag}
                        </Tag>
                    );
                }
                response.data[x].adjustedTags = temp;
            }
            this.setState({ data: response.data, loading: false });
        });
    }

    render() {
        const state = this.state;
        return (
            <HomeLayout>
                <Table {...this.state} columns={this.columns} dataSource={this.state.data} rowKey="id" />
                <div>
                    <Modal
                        title="Edit"
                        visible={this.state.visibleEditModal}
                        onOk={this.handleOkEditModal}
                        confirmLoading={this.state.editLoading}
                        onCancel={this.handleCancelEditModal}
                        cancelText="Cancel"
                        okText="Confirm"
                        width={1000}
                    >
                        <EditPage onRef={ref => (this.editpage = ref)} exist={this.state.currentData} />
                    </Modal>
                </div>
                <div>
                    <Modal
                        title="Delete"
                        visible={this.state.visibleDeleteModal}
                        onOk={this.handleOkDeleteModal}
                        confirmLoading={this.state.deleteLoading}
                        onCancel={this.handleCancelDeleteModal}
                        cancelText="Cancel"
                        okText="Confirm"
                    >
                        <p>Do you confirm to delete it?</p>
                    </Modal>
                </div>
            </HomeLayout>
        );
    }
}
