import styled from 'styled-components'

// TODO: move this to themes
const Gray = {
  50: '#EEEEEE',
  100: '#ABABAB',
}

export const DaoPage = styled.div`
  width: 100%;
  padding-top: 20px;
  min-height: calc(100vh - 200px);
  position: relative;
  background: radial-gradient(
    55.87% 55.87% at 50% 50%,
    rgba(174, 219, 1, 0.24) 19.79%,
    rgba(174, 219, 1, 0.075) 62.5%,
    rgba(174, 219, 1, 0) 91.67%
  );
`

export const PageHead = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const PageTitle = styled.h1`
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: ${Gray[50]};
`
export const PageDescription = styled.p`
  text-align: center;
  margin: 0px;
  margin-bottom: 10px;
  color: ${Gray[100]};
`

export const PageBackgroundImg = styled.img`
  position: absolute;
  width: 100%;
  margin: auto;
  z-index: -1;
`

export const DaoActionContainer = styled.div`
  width: 30%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 12px;
`
