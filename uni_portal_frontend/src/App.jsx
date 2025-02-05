import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import { teacherRoutes } from "./routes/TeacherRoutes";
import { studentRoutes } from "./routes/StudentRoutes";
import { adminRoutes } from "./routes/AdminRoutes";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  let routes;

  switch (user.role) {
    case "teacher":
      routes = teacherRoutes;
      break;
    case "student":
      routes = studentRoutes;
      break;
    case "admin":
      routes = adminRoutes;
      break;
  
  }

  return (
    <MainLayout user={user}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
