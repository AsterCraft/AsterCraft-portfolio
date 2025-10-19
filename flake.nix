{
  description = "Aster Craft Portfolio dev enviroment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/release-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.frontend = pkgs.mkShell {
          buildInputs = with pkgs; [nodejs];

          shellHook = ''
            echo "Node.js dev environment loaded"
          '';
        };

        devShells.backend = pkgs.mkShell {
          buildInputs = with pkgs; [go];

          shellHook = ''
            cd backend/
            echo "Go dev environment loaded"
          '';
        };
      }
    );
}
