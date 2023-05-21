package com.HomeHiveBackend.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

/**
 * Reference Links :
 * <a href="https://springdoc.org/faq.html#how-can-i-configure-swagger-ui">Customize Swagger UI</a>
 * <a href="https://stackoverflow.com/questions/59291371/migrating-from-springfox-swagger-2-to-springdoc-open-api">StackOverflow Link</a>
 */

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI awesomeAPI() {
        return new OpenAPI()
                .info(new Info().title("Home Hive Application")
                        .description("API Description")
                        .version("1.0")
                        .license(new License().name("Apache 2.0").url("http://www.apache.org/licenses/LICENSE-2.0")));
    }

}
