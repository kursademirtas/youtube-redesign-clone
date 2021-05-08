import  styled  from 'styled-components'
import React from 'react'
import { Avatar, NameTitle, Text } from './Styles'


const Wrapper = styled.div`
	width:200px;
	display:flex;
	justify-content:space-between;
`

const UserAvatar = ({url,name, subscribers, verified }) => {
	return (
		<Wrapper>
			<Avatar src={`http://localhost:1337${url}`} size='48px'/>
			<div className="">
			<NameTitle>{name}</NameTitle>
			<Text>{subscribers} Subscribers</Text>
			</div>
			
		</Wrapper>
	)
}

export default UserAvatar
