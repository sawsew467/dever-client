"use client";

import {
  Flex,
  Form,
  Input,
  Modal,
  Popconfirm,
  Table,
  TableProps,
  Typography,
  message,
} from "antd";
import { useParams } from "next/navigation";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import _ from "lodash";
import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import useModal from "@/hooks/useModal";
import {
  useCreatePositionMutation,
  useDeletePositionMutation,
  useEditPositionMutation,
  useGetAllPositionQuery,
} from "@/store/queries/positionManagement";

import Button from "@/components/core/common/Button";

import * as S from "./styles";

interface DataType {
  key: string;
  _id: string;
  name: string;
  constant: string;
}

function PositionManagementModule() {
  const params = useParams();

  const [editForm] = Form.useForm();

  const addModal = useModal();
  const editModal = useModal();

  const { t } = useTranslation(params?.locale as string, "positionManagement");

  const [PositionId, setPositionID] = useState<string>("");

  const [deletePosition] = useDeletePositionMutation();
  const [createPosition] = useCreatePositionMutation();
  const [editPosition] = useEditPositionMutation();
  const { result, isFetching, refetch } = useGetAllPositionQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        result: data?.data ?? [],
        isFetching,
      };
    },
  });

  const handleDelete = async (id: string) => {
    try {
      await deletePosition(id).unwrap();
      message.success("Xóa thành công");
      refetch();
    } catch (error) {}
  };

  const handleAdd = async (values: any) => {
    try {
      await createPosition(values).unwrap();
      message.success("Thêm thành công");
      refetch();
      addModal.closeModal();
    } catch (error) {}
  };

  const handleEdit = async (values: any) => {
    try {
      await editPosition({
        params: { id: PositionId },
        body: values,
      }).unwrap();
      message.success("Sửa thành công");
      refetch();
      editModal.closeModal();
    } catch (error) {}
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: 50,
    },
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("value"),
      dataIndex: "constant",
      key: "constant",
      width: 200,
    },
    {
      title: t("function"),
      key: "action",
      width: 200,
      render: (_, record) => {
        return (
          <Flex justify="center" gap={20}>
            <Button
              type="default"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                setPositionID(record?._id);
                editModal.openModal();
                editForm.setFieldsValue({
                  name: record?.name,
                  constant: record?.constant,
                });
              }}
            />
            <Popconfirm
              title={t("deletePosition.title")}
              description={t("deletePosition.description")}
              okText={t("deletePosition.okText")}
              cancelText={t("deletePosition.cancelText")}
              onConfirm={() => handleDelete(record?._id)}
            >
              <Button
                type="primary"
                shape="circle"
                danger
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Flex>
        );
      },
    },
  ];

  return (
    <S.PageWrapper>
      <S.Head>
        <Typography.Title level={2}>{t("title")}</Typography.Title>
      </S.Head>
      <S.FilterWrapper>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addModal.openModal}
        >
          {t("addPosition.title")}
        </Button>
      </S.FilterWrapper>
      <S.TableWrapper>
        <Table
          columns={columns}
          dataSource={result}
          loading={isFetching}
          rowKey={(record) => record._id}
        />
      </S.TableWrapper>
      <Modal
        open={addModal.visible}
        onCancel={addModal.closeModal}
        footer={[]}
        title={t("addPosition.title")}
      >
        <Form
          name="basic"
          onFinish={handleAdd}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label={t("addPosition.name")}
            name="name"
            rules={[{ required: true, message: "Please input your Position!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("addPosition.value")}
            name="constant"
            rules={[{ required: true, message: "Please input your constant!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" $width="100%">
            {t("addPosition.add")}
          </Button>
        </Form>
      </Modal>
      <Modal
        open={editModal.visible}
        onCancel={editModal.closeModal}
        footer={[]}
        title={t("editPosition.title")}
      >
        <Form
          name="basic"
          onFinish={handleEdit}
          autoComplete="off"
          layout="vertical"
          form={editForm}
        >
          <Form.Item
            label={t("editPosition.name")}
            name="name"
            rules={[{ required: true, message: "Please input your Position!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("editPosition.value")}
            name="constant"
            rules={[{ required: true, message: "Please input your constant!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" $width="100%">
            {t("editPosition.edit")}
          </Button>
        </Form>
      </Modal>
    </S.PageWrapper>
  );
}

export default PositionManagementModule;
