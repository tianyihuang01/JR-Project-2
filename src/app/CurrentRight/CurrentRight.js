import styled from 'styled-components';

import ContainerTop from '../../components/ContainerTop/ContainerTop';

const CityName = styled.div`
	margin-top: 16px;
	font-size: 2rem;

	&::after {
		content: '';
		border: solid white 1px;
		width: 60%;
		margin: 10px auto;
		display: block;
	}
`;

const CurrentRight = ({city}) => (
	<ContainerTop>
		<CityName>{city}</CityName>
	</ContainerTop>
);

export default CurrentRight;