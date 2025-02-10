#!/usr/bin/env python3
"""
Module Personal Data
"""

import re


def filter_datum(fields, redaction, message, separator):
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
    return re.sub(
        rf'({"|".join(fields)})=[^{separator}]*',
        lambda m: f"{m.group(1)}={redaction}",
        message
    )
