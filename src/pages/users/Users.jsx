import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import { StyledBox } from './style/style';
import { Search } from '../../components/Search/Search';
import { Error } from '../../components/Error/Error';
import { useNavigate } from 'react-router-dom';

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUsers = async () => {

            try {
                let page = 1;
                let allUsers = [];
                let allPages = 1;

                do {

                    const response = await axios.get('https://reqres.in/api/users', { 
                        params: { page },
                        headers: {
                              'x-api-key': 'reqres-free-v1' 
                            }
                        });
                    const { data, total_pages } = response.data; 
                    console.log(response.data)
                    allUsers = [...allUsers, ...data];
                    allPages = total_pages;
                    page += 1;

                } while (page <= allPages);

                setUsers(allUsers);

            }
            catch (error) {
                setError(error);
                console.error("Erro ao buscar usuários:", error);
            }
        }
        fetchUsers()
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleRemoveCustomer = (id) => {
        axios.delete(`https://reqres.in/api/users/${id}`)

            .then(() => {
                const newUserState = users.filter(usuarios => usuarios.id !== id);
                setUsers(newUserState);
            })
    }

    const handleEditUser = (id) => {
        navigate(`/users/edit/${id}`)
    }


    const filteredUsers = users.filter((user) => `${user.first_name}${user.last_name}`.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <Search
                value={search}
                onChange={handleSearch}
            />

            {error
                ? <Error />
                : (
                    <StyledBox>
                        {
                            filteredUsers.map((user) => (
                                <Card
                                    key={user.id}
                                    id={user.id}
                                    first_name={user.first_name}
                                    last_name={user.last_name}
                                    email={user.email}
                                    avatar={user.avatar}
                                    onRemoveCustumer={handleRemoveCustomer}
                                    onEditcustomer={handleEditUser}
                                />
                            )
                            )
                        }
                    </StyledBox> 
                )
            }

        </>

    )
}