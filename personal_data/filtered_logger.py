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
    escaped_separator = re.escape(separator)
    pater = rf'({ "|".join(map(re.escape, fields)) })=[^ {escaped_separator}]*'

    return re.sub(pater, lambda m: f"{m.group(1)}={redaction}", message)
