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
    Args:
        fields (list[str]): Liste des champs dont les valeurs doivent être
        masquées.
        redaction (str): Texte de remplacement pour obfusquer les valeurs
        sensibles.
        message (str): Chaîne de log contenant les paires clé-valeur.
        separator (str): Caractère séparant les paires clé-valeur dans la chaîn

    Returns:
        str: Le message modifié avec les valeurs des champs spécifiés remplacée
          par `redaction`.
    """
    for field in fields:
        message = re.sub(rf'{field}=.+?{separator}',
                         f'{field}={redaction}{separator}', message)
    return message
