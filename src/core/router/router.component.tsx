import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'core/scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
      </Routes>
    </HashRouter>
  );
};
