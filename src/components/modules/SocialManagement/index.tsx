"use client";

import { useState } from "react";
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

import { useTranslation } from "@/app/i18n/client";
import {
  useCreateSocialMutation,
  useDeleteSocialMutation,
  useEditSocialMutation,
  useGetAllSocialsQuery,
} from "@/store/queries/socialManagement";
import useModal from "@/hooks/useModal";

import Button from "@/components/core/common/Button";

import * as S from "./styles";

interface DataType {
  key: string;
  _id: string;
  name: string;
  constant: string;
}

function SocialManagementModule() {
  const params = useParams();

  const [editForm] = Form.useForm();

  const addModal = useModal();
  const editModal = useModal();

  const { t } = useTranslation(params?.locale as string, "socialManagement");

  const [SocialId, setSocialID] = useState<string>("");

  const [deleteSocial] = useDeleteSocialMutation();
  const [createSocial] = useCreateSocialMutation();
  const [editSocial] = useEditSocialMutation();
  const { result, isFetching, refetch } = useGetAllSocialsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        result: data?.data ?? [],
        isFetching,
      };
    },
  });

  const handleDelete = async (id: string) => {
    try {
      await deleteSocial(id).unwrap();
      message.success("Xóa thành công");
      refetch();
    } catch (error) {}
  };

  const handleAdd = async (values: any) => {
    try {
      await createSocial(values).unwrap();
      message.success("Thêm thành công");
      refetch();
      addModal.closeModal();
    } catch (error) {}
  };

  const handleEdit = async (values: any) => {
    try {
      await editSocial({
        params: { id: SocialId },
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
                setSocialID(record?._id);
                editModal.openModal();
                editForm.setFieldsValue({
                  name: record?.name,
                  constant: record?.constant,
                });
              }}
            />
            <Popconfirm
              title={t("deleteSocial.title")}
              description={t("deleteSocial.description")}
              okText={t("deleteSocial.okText")}
              cancelText={t("deleteSocial.cancelText")}
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
          {t("addSocial.title")}
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
        title={t("addSocial.title")}
      >
        <Form
          name="basic"
          onFinish={handleAdd}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label={t("addSocial.name")}
            name="name"
            rules={[{ required: true, message: "Please input your Social!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("addSocial.value")}
            name="constant"
            rules={[{ required: true, message: "Please input your constant!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" $width="100%">
            {t("addSocial.add")}
          </Button>
        </Form>
      </Modal>
      <Modal
        open={editModal.visible}
        onCancel={editModal.closeModal}
        footer={[]}
        title={t("editSocial.title")}
      >
        <Form
          name="basic"
          onFinish={handleEdit}
          autoComplete="off"
          layout="vertical"
          form={editForm}
        >
          <Form.Item
            label={t("editSocial.name")}
            name="name"
            rules={[{ required: true, message: "Please input your Social!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("editSocial.value")}
            name="constant"
            rules={[{ required: true, message: "Please input your constant!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" $width="100%">
            {t("editSocial.edit")}
          </Button>
        </Form>
      </Modal>
    </S.PageWrapper>
  );
}

export default SocialManagementModule;
