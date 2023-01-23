import styled from "styled-components";
import Box from "./Box";

const SkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Skeleton = () => {
  return (
    <li>
      <SkeletonStyle>
        <Box width={180} height={240} margin={4} />
        <Box width={180} height={32} />
      </SkeletonStyle>
    </li>
  );
};

export default Skeleton;
