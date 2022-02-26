package it.news.config;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.persistence.spi.PersistenceProvider;
import javax.sql.DataSource;

import org.eclipse.persistence.config.PersistenceUnitProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.weaving.DefaultContextLoadTimeWeaver;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.instrument.classloading.LoadTimeWeaver;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories("it.news.repository")
@EnableTransactionManagement
@ComponentScan({ "it.news.domain", "it.news.model" })
@PropertySource(value = "classpath:specific.properties")
public class DBConfig {
	
		@Autowired
		Environment env;
		
		@Bean
		public DataSource getDataSource() {
			DriverManagerDataSource dataSource = new DriverManagerDataSource();
			dataSource.setDriverClassName(env.getProperty("datasource.driver"));
			dataSource.setUrl(env.getProperty("datasource.url"));
			dataSource.setUsername(env.getProperty("datasource.username"));
			dataSource.setPassword(env.getProperty("datasource.password"));
			return dataSource;
		}

		@Bean
		public LoadTimeWeaver loadTimeWeaver() throws Throwable {
			LoadTimeWeaver loadTimeWeaver = new DefaultContextLoadTimeWeaver();
			return loadTimeWeaver;
		}
		
		@Bean
		@Autowired
		public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
			JpaTransactionManager txManager = new JpaTransactionManager();
			txManager.setEntityManagerFactory(entityManagerFactory);
			return txManager;
		}

		@Bean
		@Autowired
		public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
			LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
			factory.setDataSource(dataSource);
			factory.setPersistenceUnitName("seriebi");
			factory.setPackagesToScan("it.news.domain");
			try {
				factory.setPersistenceProvider((PersistenceProvider)Class.forName(env.getProperty("datasource.provider")).newInstance());
			} catch(InstantiationException | IllegalAccessException | ClassNotFoundException e) {}
			Properties prop = new Properties();
			/* Clean cache second level with sharedCache and WEAVING_INTERNAL */
			prop.setProperty("javax.persistence.sharedCache.mode", "NONE");
			prop.setProperty(PersistenceUnitProperties.WEAVING_INTERNAL, Boolean.FALSE.toString());
			prop.setProperty("javax.persistence.schema-generation.database.action", env.getProperty("datasource.createTable"));
//			prop.setProperty(PersistenceUnitProperties.LOGGING_LOGGER, "ServerLogger");
//			prop.setProperty(PersistenceUnitProperties.LOGGING_LEVEL, Level.FINE.getName());
//			prop.setProperty("eclipselink.logging.level.sql", "FINE");
			factory.setJpaProperties(prop);
			return factory;
		}
}
