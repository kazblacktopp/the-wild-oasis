import styled, { css } from 'styled-components';

interface HeadingProps {
	as: string;
}

const Heading = styled.div<HeadingProps>`
	${props =>
		props.as === 'h1' &&
		css`
			font-size: 3rem;
			font-weight: 600;
		`}

	line-height: 1.4;
`;

export default Heading;
