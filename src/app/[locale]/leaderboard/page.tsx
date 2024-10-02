"use client";

import { Flex, Table, TableColumnsType, Typography } from "antd";
import React from "react";

interface DataType {
  key: React.Key;
  name: string;
  studentId: string;
  idCard: string;
  scoreQ1: number;
  timeQ1: number;
  scoreQ2: number;
  timeQ2: number;
  scoreQ3: number;
  timeQ3: number;
  totalScore: number;
  totalTime: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Họ và Tên",
    dataIndex: "name",
    key: "name",
    width: 150,
  },
  {
    title: "Mã số SV",
    dataIndex: "studentId",
    key: "studentId",
    width: 100,
  },
  {
    title: "Số CMND/CCCD",
    dataIndex: "idCard",
    key: "idCard",
    width: 150,
  },
  {
    title: "Câu hỏi số 1",
    children: [
      {
        title: "Điểm",
        dataIndex: "scoreQ1",
        key: "scoreQ1",
        width: 80,
      },
      {
        title: "Thời gian",
        dataIndex: "timeQ1",
        key: "timeQ1",
        width: 100,
      },
    ],
  },
  {
    title: "Câu hỏi số 2",
    children: [
      {
        title: "Điểm",
        dataIndex: "scoreQ2",
        key: "scoreQ2",
        width: 80,
      },
      {
        title: "Thời gian",
        dataIndex: "timeQ2",
        key: "timeQ2",
        width: 100,
      },
    ],
  },
  {
    title: "Câu hỏi số 3",
    children: [
      {
        title: "Điểm",
        dataIndex: "scoreQ3",
        key: "scoreQ3",
        width: 80,
      },
      {
        title: "Thời gian",
        dataIndex: "timeQ3",
        key: "timeQ3",
        width: 100,
      },
    ],
  },
  {
    title: "Tổng",
    children: [
      {
        title: "Điểm",
        dataIndex: "totalScore",
        key: "totalScore",
        width: 80,
      },
      {
        title: "Thời gian",
        dataIndex: "totalTime",
        key: "totalTime",
        width: 100,
      },
    ],
  },
];

const dataSource: DataType[] = [
  {
    key: 1,
    name: "Dương Nguyễn Phú Quý",
    studentId: "DE180677",
    idCard: "049204005210",
    scoreQ1: 90,
    timeQ1: 588,
    scoreQ2: 90,
    timeQ2: 600,
    scoreQ3: 95,
    timeQ3: 600,
    totalScore: 275,
    totalTime: 1788,
  },
  {
    key: 2,
    name: "Lê Đức Anh Phương",
    studentId: "DE180914",
    idCard: "048204004325",
    scoreQ1: 90,
    timeQ1: 600,
    scoreQ2: 84,
    timeQ2: 600,
    scoreQ3: 98,
    timeQ3: 600,
    totalScore: 272,
    totalTime: 1800,
  },
  {
    key: 3,
    name: "Nguyễn Văn Duy Khang",
    studentId: "DE180943",
    idCard: "046204011334",
    scoreQ1: 88,
    timeQ1: 600,
    scoreQ2: 85,
    timeQ2: 844,
    scoreQ3: 89,
    timeQ3: 597,
    totalScore: 262,
    totalTime: 2041,
  },
];

function DashboardPage() {
  return (
    <Flex
      vertical
      gap={16}
      style={{
        padding: "40px 10px",
      }}
    >
      <Typography.Title
        style={{
          textAlign: "center",
        }}
      >
        Bảng xếp hạng
      </Typography.Title>
      <Typography.Text>Ngày 23/06/2023</Typography.Text>
      <Table<DataType>
        // className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        bordered
        size="middle"
        scroll={{ x: "calc(700px + 50%)", y: 47 * 5 }}
      />
    </Flex>
  );
}

export default DashboardPage;
