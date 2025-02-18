#!/usr/bin/env python3
""" Session Authentication module """
import uuid
from api.v1.auth.auth import Auth


class SessionAuth(Auth):
    """ Empty class that inherits from Auth """
    user_id_by_session_id = {}  # Stockage en mémoire des sessions

    def create_session(self, user_id: str = None) -> str:
        """ Creates a session ID for a given user_id """
        if user_id is None or not isinstance(user_id, str):
            return None

        # Générer un Session ID unique
        session_id = str(uuid.uuid4())

        # Associer l'ID de session à l'ID utilisateur
        self.user_id_by_session_id[session_id] = user_id

        return session_id
