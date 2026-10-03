# ADR-005 — Passenger Flutter and native Android driver

Date: 2026-10-03. Status: **User platform direction; device/store gates open**. Decision owner: mobile lead; product owner validates iOS driver demand.

## Context

Passenger apps need consistent Android/iOS booking UX. Driver apps need reliable shift tracking, OS-permitted background location, navigation, offers and reconnect behavior. Native technology alone cannot override operating-system limits.

## Decision

Use Flutter/Dart for passenger Android+iOS, intentionally layered with feature-focused architecture and native integrations where needed. Flutter supports platform-specific Kotlin/Swift channels. [Flutter platform integration](https://docs.flutter.dev/platform-integration/platform-channels).

Use Kotlin/Jetpack Compose for Android drivers and a visible foreground location service initiated during the permitted user workflow. Track permission revocation, power/network restrictions and service lifecycle explicitly. Android restricts starting foreground services from the background. [Android restrictions](https://developer.android.com/develop/background-work/services/fgs/restrictions-bg-start).

Native Swift/SwiftUI driver iOS is a scope capability considered when local driver device research and staffing justify it, not an automatic additional app on day one. Its background tracking must pass actual Apple Core Location/device tests. [Apple background updates](https://developer.apple.com/documentation/corelocation/handling-location-updates-in-the-background).

## Validation and consequences

Use Georgian/English accessibility, low-end Android/OEM, denied permission, app kill, tunnel, GPS skew, reconnection and battery field tests across all five cities. Store command intent encrypted locally; display pending server confirmation and rehydrate durable trip state. Push delivery is best effort. Select exact libraries/toolchains and app-store target versions through a compatibility matrix; no version pins or signing/accounts are created by this record.
