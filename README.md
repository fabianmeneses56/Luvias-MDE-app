# Lluvias MDE ☔️📡

**Lluvias MDE** es una aplicación móvil escrita en **React Native** que muestra el pronóstico del tiempo para Medellín y los 10 municipios del Valle de Aburrá. Utiliza exclusivamente los endpoints públicos del **SIATA** (Sistema de Alerta Temprana de Medellín y el Valle de Aburrá) para obtener datos meteorológicos.

> **Importante:** Este proyecto es **independiente** y **no** forma parte del desarrollo oficial del SIATA ni de sus entidades patrocinadoras.

---

## ✨ Funcionalidades principales

- Consulta rápida del pronóstico por municipio.
- Mapa interactivo con radar de lluvias en tiempo real.
- Define tu municipio favorito para verlo siempre de primeras
- **Privacidad ante todo:** la app no recopila datos personales ni rastrea al usuario.

---

## 🚀 Primeros pasos

A continuación se describen las instrucciones para clonar y ejecutar el proyecto en modo desarrollo.

### 1. Requisitos

| Herramienta          | Versión recomendada   |
| -------------------- | --------------------- |
| Node.js              | ≥ 18 LTS              |
| Yarn o npm           | Yarn ≥ 1.22 / npm ≥ 8 |
| React Native CLI     | ≥ 10                  |
| Xcode (macOS)        | ≥ 15 (solo iOS)       |
| Android Studio + SDK | ≥ Giraffe / API 34    |

### 2. Clonación del repositorio

```bash
git clone https://github.com/fabianmeneses56/siata-medellin-clone-app
cd siata-medellin-clone-app
```

### 3. Instalación de dependencias

```bash
# con Yarn
yarn install

# o con npm
npm install
```

### 4. Generación de los bundles nativos

#### Android

```bash
# Inicia un emulador o conecta tu dispositivo
yarn android        # o: npm run android
```

#### iOS (macOS)

```bash
# Instala pods
cd ios && pod install && cd ..
# Construye y ejecuta
yarn ios            # o: npm run ios
```

<div align="center">
  Hecho con ❤️ en Medellín, Colombia 🇨🇴
</div>
