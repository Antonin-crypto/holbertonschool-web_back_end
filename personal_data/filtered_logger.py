#!/usr/bin/env python3
"""
Module Personal Data
"""

import re


def filter_datum(
    fields: list[str],
    redaction: str,
    message: str,
    separator: str
) -> str:
    """
    Remplace les valeurs des champs spécifiés par `redaction` dans un message.

    Args:
        fields (list[str]): Liste des champs dont les valeurs doivent être
            masquées.
        redaction (str): Texte de remplacement pour obfusquer les valeurs
            sensibles.
        message (str): Chaîne de log contenant les paires clé-valeur.
        separator (str): Caractère séparant les paires clé-valeur dans la
        chaîne.

    Returns:
        str: Le message modifié avec les valeurs des champs spécifiés
        remplacées par `redaction`.
    """
    for field in fields:
        pattern = (
            rf'{re.escape(field)}=[^ {re.escape(separator)}]+'
            rf'{re.escape(separator)}'
        )
        replacement = f'{field}={redaction}{separator}'
        message = re.sub(pattern, replacement, message)
    return message
