import  styled  from 'styled-components'
import React from 'react'
import { Avatar, NameTitle, Text } from './Styles'


const Wrapper = styled.div`
	display:flex;
	justify-content:space-between;
	div{
		margin-left:1rem;
	}
`

const UserAvatar = ({url, name, subscribers, verified }) => {

	return (
		<Wrapper>
			<Avatar src={url} size='48px'/>
			<div className="">
			<NameTitle>{name}</NameTitle>
			<Text>{subscribers} Subscribers</Text>
			</div>	
		</Wrapper>
	)
}

export default UserAvatar
