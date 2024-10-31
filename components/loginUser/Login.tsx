"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function LoginRegisterToggle() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{isLogin ? "Iniciar sesión" : "Registrarse"}</CardTitle>
        <CardDescription>
          {isLogin
            ? "Ingresa tus credenciales para acceder"
            : "Crea una nueva cuenta"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="nombre@ejemplo.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" />
            </div>
            {!isLogin && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button>{isLogin ? "Iniciar sesión" : "Registrarse"}</Button>
        <div className="flex items-center space-x-2">
          <Switch id="form-toggle" onCheckedChange={toggleForm} />
          <Label htmlFor="form-toggle">
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </Label>
        </div>
      </CardFooter>
    </Card>
  );
}
