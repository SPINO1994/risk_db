# Risk Registry Web Application

Spring Boot 3.x CRUD panel for Information Security and Risk Registry (13 tables).

## Build / JDK

This project targets **Java 17** (`java.version` in `pom.xml`).

If IntelliJ uses **JDK 26**, Lombok must be **1.18.46+** (see `lombok.version` in `pom.xml`). After changing `pom.xml`, use **Maven → Reload project**, then **Build → Rebuild**.

Alternatively, set **Project SDK** to JDK 17 in **File → Project Structure → Project**.

## Configuration

Database settings are in `src/main/resources/application.properties`:

- Database: `risk_db` (auto-created if missing)
- User: `root`
- Password: configured in properties file

## Run

```bash
cd risk-registry-app
mvn spring-boot:run
```

Open: [http://localhost:8080](http://localhost:8080)

## REST API

| Entity | Endpoint |
|--------|----------|
| Asset | `/api/assets` |
| Role | `/api/roles` |
| Employee | `/api/employees` |
| RACI Matrix | `/api/raci-matrices` |
| Requirement | `/api/requirements` |
| Threshold | `/api/thresholds` |
| Discrepancy | `/api/discrepancies` |
| Threat | `/api/threats` |
| Threat Assessment | `/api/threat-assessments` |
| Solution | `/api/solutions` |
| Consequence | `/api/consequences` |
| Risk Register | `/api/risks` |
| Incident | `/api/incidents` |

Each endpoint supports: `GET`, `GET /{id}`, `POST`, `PUT /{id}`, `DELETE /{id}`.

## Project structure

```
src/main/java/az/risk/registry/
  entity/          # 13 JPA entities
  repository/      # Spring Data JPA repositories
  service/         # CRUD services
  controller/      # REST controllers
src/main/resources/
  application.properties
  static/          # Bootstrap 5 SPA (sidebar + AJAX CRUD)
```
