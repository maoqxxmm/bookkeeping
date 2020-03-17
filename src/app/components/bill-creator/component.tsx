import React, { useState } from "react";
import {
  Dialog,
  Form,
  Radio,
  CascaderSelect,
  Switch,
  Input,
  Button
} from "@alifd/next";
import * as styles from "./component.scss";

interface Props {
  onClose: () => void;
}

const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};

export const BillCreatorComponent: React.FC<Props> = props => {
  const onCreate = (value: {}) => {
    console.log(value);
  };

  return (
    <Dialog
      title="记一笔"
      visible={true}
      footer={false}
      closeable={true}
      onClose={props.onClose}
    >
      <Form {...formItemLayout} className={styles["form"]}>
        <Form.Item label="金额" required>
          <Input type="number" name="money" id="money" />
        </Form.Item>
        <Form.Item label="类型" required>
          <Radio.Group name="type" shape="button" defaultValue={0}>
            <Radio value={0}>支出</Radio>
            <Radio value={1}>收入</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="备注">
          <Input type="text" name="content" id="content" />
        </Form.Item>
        <Form.Item label="分类">
          <CascaderSelect></CascaderSelect>
        </Form.Item>
        <Form.Item label="可报销">
          <Switch defaultChecked={false}></Switch>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: formItemLayout.labelCol.span }}>
          <Form.Submit type="primary" onClick={onCreate}>
            确认
          </Form.Submit>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </Dialog>
  );
};
