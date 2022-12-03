const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const apiUrl = "http://jsonplaceholder.typicode.com/users";
      await axios.get(apiUrl).then((resp) => {
        const allUsers = resp.data;
        setUsers(allUsers);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
    const timer = setTimeout(() => setShowGreetings(false), 2000);
    return {
      timer,
    };
  }, [setUsers]);

  {users ? (
    users.map(({ id, name }) => (
      <Text key={id}>
        {id} + {name}
      </Text>
    ))
  ) : (
    <Text>загрузка данных...</Text>
  )}