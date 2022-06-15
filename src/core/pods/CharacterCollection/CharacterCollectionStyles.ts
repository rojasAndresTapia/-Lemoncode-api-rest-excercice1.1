import { css } from 'emotion';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`;

export const cardCollection = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const card = css`
  margin-top: 20px;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;
