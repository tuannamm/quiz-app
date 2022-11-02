let user = {};

console.log(user?.address?.street ?? "not found user"); // nếu undefined thì trả về giá trị sau '??'
