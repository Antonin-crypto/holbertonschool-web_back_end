#!/usr/bin/env python3
"""
Unit tests for GithubOrgClient in client module.
"""
import unittest
from parameterized import parameterized
from unittest.mock import patch, PropertyMock
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """This class contains unit tests for the GithubOrgClient class."""

    @parameterized.expand([
        ("google",),
        ("abc",),
    ])
    @patch("client.get_json")
    def test_org(self, org_name, mock_get_json):
        """Test that GithubOrgClient.org returns the correct value."""
        test_payload = {"login": org_name}
        mock_get_json.return_value = test_payload

        client = GithubOrgClient(org_name)
        self.assertEqual(client.org, test_payload)
        mock_get_json.assert_called_once_with
        (f"https://api.github.com/orgs/{org_name}")

    @patch("client.GithubOrgClient.org", new_callable=PropertyMock)
    def test_public_repos_url(self, mock_org):
        """Test that GithubOrgClient._public_repos returns the correct URL."""
        mock_org.return_value = {"repos_url":
                                 "https://api.github.com/orgs/test/repos"}

        client = GithubOrgClient("test")
        self.assertEqual
        (client._public_repos_url, "https://api.github.com/orgs/test/repos")


if __name__ == "__main__":
    unittest.main()
