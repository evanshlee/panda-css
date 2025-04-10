import { css } from "../styled-system/css";
import { token } from "../styled-system/tokens";

function App() {
  return (
    <main
      className={css({
        maxWidth: "container.lg",
        margin: "0 auto",
        padding: "3rem",
      })}
    >
      <h1
        className={css({
          fontSize: "4xl",
          fontWeight: "bold",
          color: "primary.600",
          marginBottom: "spacing.lg",
          fontFamily: "heading",
        })}
      >
        PandaCSS Token Usage Example
      </h1>

      {/* Basic Token Usage */}
      <section
        className={css({
          marginBottom: "spacing.xl",
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Basic Token Usage
        </h2>

        <p
          className={css({
            color: "primary",
            fontFamily: "body",
            marginBottom: "spacing.md",
          })}
        >
          This text uses the primary color token and body font token.
        </p>

        <p
          className={css({
            color: "secondary",
            fontFamily: "heading",
            fontSize: "lg",
            marginBottom: "spacing.md",
          })}
        >
          This text uses the secondary color token and heading font token.
        </p>

        <p
          className={css({
            color: "blue",
            fontFamily: "mono",
            fontSize: "sm",
          })}
        >
          This text uses the blue color token and mono font token.
        </p>
      </section>

      {/* Color Scale Tokens */}
      <section
        className={css({
          marginBottom: "spacing.xl",
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Color Scale Tokens
        </h2>

        <div>
          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Primary Color Scale
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "spacing.xs",
              marginBottom: "spacing.md",
            })}
          >
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((scale) => (
              <div
                key={scale}
                className={css({
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: `primary.${scale}`,
                  borderRadius: "radii.md",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: scale > 500 ? "white" : "gray.800",
                  fontWeight: "medium",
                })}
              >
                {scale}
              </div>
            ))}
          </div>

          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Secondary Color Scale
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "spacing.xs",
              marginBottom: "spacing.md",
            })}
          >
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((scale) => (
              <div
                key={scale}
                className={css({
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: `secondary.${scale}`,
                  borderRadius: "radii.md",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: scale > 500 ? "white" : "gray.800",
                  fontWeight: "medium",
                })}
              >
                {scale}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Tokens */}
      <section
        className={css({
          marginBottom: "spacing.xl",
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Semantic Tokens
        </h2>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "spacing.md",
            marginBottom: "spacing.lg",
          })}
        >
          <p className={css({ color: "text" })}>
            This text uses the default text color token.
          </p>
          <p className={css({ color: "text.muted" })}>
            This text uses the muted text color token.
          </p>
        </div>

        <div
          className={css({
            display: "flex",
            gap: "spacing.md",
          })}
        >
          <button
            className={css({
              backgroundColor: "danger",
              color: "white",
              padding: "spacing.xs spacing.md",
              borderRadius: "radii.md",
              fontWeight: "bold",
              _hover: { opacity: 0.9 },
            })}
          >
            Danger Button
          </button>
          <button
            className={css({
              backgroundColor: "success",
              color: "white",
              padding: "spacing.xs spacing.md",
              borderRadius: "radii.md",
              fontWeight: "bold",
              _hover: { opacity: 0.9 },
            })}
          >
            Success Button
          </button>
          <button
            className={css({
              backgroundColor: "info",
              color: "white",
              padding: "spacing.xs spacing.md",
              borderRadius: "radii.md",
              fontWeight: "bold",
              _hover: { opacity: 0.9 },
            })}
          >
            Info Button
          </button>
        </div>
      </section>

      {/* Spacing and Border Radius Tokens */}
      <section
        className={css({
          marginBottom: "spacing.xl",
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Spacing and Border Radius Tokens
        </h2>

        <div>
          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Spacing Tokens
          </h3>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "spacing.md",
              marginBottom: "spacing.lg",
            })}
          >
            {["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].map((size) => (
              <div
                key={size}
                className={css({
                  width: `spacing.${size}`,
                  height: "spacing.lg",
                  backgroundColor: "primary.300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "xs",
                })}
              >
                {size}
              </div>
            ))}
          </div>

          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Border Radius Tokens
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "spacing.md",
            })}
          >
            {["none", "sm", "md", "lg", "full"].map((radius) => (
              <div
                key={radius}
                className={css({
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "secondary.300",
                  borderRadius: `radii.${radius}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "xs",
                })}
              >
                {radius}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border and Shadow Tokens */}
      <section
        className={css({
          marginBottom: "spacing.xl",
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Border and Shadow Tokens
        </h2>

        <div>
          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Border Tokens
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "spacing.md",
              marginBottom: "spacing.lg",
            })}
          >
            {["thin", "medium", "thick"].map((borderType) => (
              <div
                key={borderType}
                className={css({
                  width: "6rem",
                  height: "3rem",
                  border: `borders.${borderType}`,
                  borderColor: "primary.500",
                  borderRadius: "radii.md",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {borderType}
              </div>
            ))}
          </div>

          <h3 className={css({ fontSize: "xl", marginBottom: "spacing.sm" })}>
            Shadow Tokens
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "spacing.md",
            })}
          >
            {["sm", "md", "lg"].map((shadowSize) => (
              <div
                key={shadowSize}
                className={css({
                  width: "6rem",
                  height: "3rem",
                  backgroundColor: "white",
                  boxShadow: `shadows.${shadowSize}`,
                  borderRadius: "radii.md",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {shadowSize}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Using token() Function */}
      <section
        className={css({
          padding: "spacing.lg",
          backgroundColor: "bg.card",
          borderRadius: "radii.lg",
          boxShadow: "shadows.md",
          border: "border.card",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            marginBottom: "spacing.md",
            color: "text",
          })}
        >
          Using token() Function
        </h2>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "spacing.md",
          })}
        >
          <div>
            Primary Color Value:{" "}
            <span className={css({ fontFamily: "mono" })}>
              {token("colors.primary")}
            </span>
          </div>
          <div>
            Secondary Color Value:{" "}
            <span className={css({ fontFamily: "mono" })}>
              {token("colors.secondary")}
            </span>
          </div>
          <div>
            Body Font Value:{" "}
            <span className={css({ fontFamily: "mono" })}>
              {token("fonts.body")}
            </span>
          </div>
          <div
            style={{
              background: token("colors.primary"),
              padding: token("spacing.-10"),
              borderRadius: token("radii.md"),
              display: "inline-block",
            }}
          >
            Element styled with raw token values
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
