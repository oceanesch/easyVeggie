// const NutritionRecordsList = () => {
//     const [foodList, setFoodList] = useState([]);
  
//     useEffect(() => {
//       fetch('http://localhost:8080/admin/nutritionalrecord')
//         .then((response) => {
//           if (response.status !== 200 && response.status !== 201) {
//             throw new Error('Failed to fetch records.');
//           }
//           return response.json();
//         })
//         .then((responseData) => {
//           setFoodList(responseData.nutritionalRecords);
//         })
//         .catch((error) => console.error(error));
//     }, []);
  
//     return (
//       <List className={classes.nutritionRecordsList}>
//         {foodList.map((foodItem) => {
//           return <NutritionCard key={foodItem._id} name={foodItem.foodName} />;
//         })}
//       </List>
//     );
//   };