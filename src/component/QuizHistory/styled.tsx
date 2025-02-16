import styled from "styled-components";
import Header3 from "../common/Typography/Header3";

export const HistoryContainer = styled.div({
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "800px",
  margin: "0 auto",
});

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export const AttemptCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DateText = styled(Header3)`
  margin-bottom: 8px;
`;

export const Text = styled(Header3)`
  margin: 4px 0;
`;
