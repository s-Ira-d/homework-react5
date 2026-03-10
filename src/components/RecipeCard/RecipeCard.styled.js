import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${(props) => (props.$hard ? "#ff4d4d" : "#ccc")};
  width: 250px;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 3px 0;
`;
