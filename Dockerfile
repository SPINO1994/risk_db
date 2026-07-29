# ── Stage 1: Build ──────────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jdk-alpine AS builder

WORKDIR /app

# Copy Maven wrapper and pom first (layer-cache friendly)
COPY pom.xml .
COPY src ./src

# Install Maven and build, skipping tests for faster image builds
RUN apk add --no-cache maven && \
    mvn clean package -DskipTests

# ── Stage 2: Runtime ─────────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the fat JAR from the builder stage
COPY --from=builder /app/target/risk-registry-app-1.0.0.jar app.jar

# Own files as non-root user
RUN chown appuser:appgroup app.jar

USER appuser

# Render uses PORT env variable; Spring Boot reads SERVER_PORT
EXPOSE 8080

# JVM tuning for container environments
ENV JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseContainerSupport"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
