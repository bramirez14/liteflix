import { Progress } from 'antd';
export const Demo = () => {
  return (
      <>
        <Progress percent={100} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </>
  )
}
